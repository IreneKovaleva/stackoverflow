import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, getByTestId} from '@testing-library/react';
import Questions from "../../api_components/questions/Questions";
import { useActions } from '../../store/hooks/useActions';
import * as useActionsModule from '../../store/hooks/useActions';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from "../../store";
import * as useTypedSelectorModule from "../../store/hooks/useTypedSelector";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";

jest.mock('../../store/hooks/useActions');
jest.mock('../../store/hooks/useTypedSelector');

describe('Questions component', () => {
    let mockActions: any;
    let mockTypedSelector: any;

    beforeEach(() => {
        mockActions = {
            setTagApi: jest.fn(),
            setTotalPages: jest.fn(),
            UserQuestionActionCreatorQuestionId: jest.fn(),
            fetchQuestionsApiEndpoint: jest.fn(),
        };
        mockTypedSelector = {
            questions: [],
            loading: false,
            error: null,
            order: 'desc',
            sort: 'votes',
            tag: 'javascript',
            total: 100,
            page_size: 10
        };

        jest.spyOn(useActionsModule, 'useActions').mockReturnValue(mockActions);
        jest.spyOn(useTypedSelectorModule, 'useTypedSelector').mockReturnValue(mockTypedSelector);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Questions />
                </BrowserRouter>
            </Provider>
        );
    });

    it('test if tag state was changed', () => {
        const { queryAllByTestId } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Questions />
                </BrowserRouter>
            </Provider>
        );

        const tagElements = queryAllByTestId('redirect-tag');
        if (tagElements.length > 0) {
            const tagElement = tagElements[0];
            fireEvent.click(tagElement);
            expect(mockActions.setTagApi).toHaveBeenCalledWith(tagElement.textContent?.trim().slice(1));
        }
    });
    it("test if question id state was changed", ()=> {
        const {queryAllByTestId} = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Questions />
                </BrowserRouter>
            </Provider>
        );
        const questionElements = queryAllByTestId('transfer-question-id');
        if (questionElements.length > 0) {
            const questionElement = questionElements[0];
            fireEvent.click(questionElement);
            const questionId = mockTypedSelector.questions[0].question_id;
            expect(mockActions.UserQuestionActionCreatorQuestionId).toHaveBeenCalledWith(questionId.toString());
        }
    })
    it('renders pagination correctly', () => {
        mockTypedSelector.total = 20;
        const { getByTestId } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Questions />
                </BrowserRouter>
            </Provider>
        );
        expect(getByTestId('pagination')).toBeInTheDocument();
    });
    it("check if fetch function was called after changing values in parameters", () => {

        mockTypedSelector.page = 7;
        mockTypedSelector.order = "asc";
        mockTypedSelector.sort = "creation";
        mockTypedSelector.tag = "php";
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Questions />
                </BrowserRouter>
            </Provider>
        );
        expect(mockActions.fetchQuestionsApiEndpoint).toHaveBeenCalledWith(7, 'asc', 'creation', 'php');
    })

});
