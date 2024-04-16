import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, getByTestId} from '@testing-library/react';
import Main from "../../components/menu_components/main_component/Main";
import { useActions } from '../../store/hooks/useActions';
import * as useActionsModule from '../../store/hooks/useActions';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from "../../store";


jest.mock('../../store/hooks/useActions');

describe('Main component', () => {
    let mockActions: any;

    beforeEach(() => {
        mockActions = {
            setOrder: jest.fn(),
            setSorting: jest.fn(),
            fetchQuestionsApiEndpoint: jest.fn(),
        };

        jest.spyOn(useActionsModule, 'useActions').mockReturnValue(mockActions);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </Provider>
        );
    });

    it('activates sorting button when clicked', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </Provider>
        );
        const votesButton = getByTestId('votes-button');
        fireEvent.click(votesButton);
        expect(votesButton).toHaveClass('button active');
        expect(mockActions.setSorting).toHaveBeenCalledWith("votes");

        const creationButton = getByTestId('creation-button');
        fireEvent.click(creationButton);
        expect(creationButton).toHaveClass('button active');
        expect(mockActions.setSorting).toHaveBeenCalledWith("creation");

        const activityButton = getByTestId('activity-button');
        fireEvent.click(activityButton);
        expect(activityButton).toHaveClass('button active');
        expect(mockActions.setSorting).toHaveBeenCalledWith("activity");

    });

    it('activates order button when clicked', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </Provider>

        );
        const ascButton = getByTestId('asc-button');
        fireEvent.click(ascButton);
        expect(ascButton).toHaveClass('button active');
        expect(mockActions.setOrder).toHaveBeenCalledWith("asc");

        const descButton = getByTestId('desc-button');
        fireEvent.click(descButton);
        expect(descButton).toHaveClass('button active');
        expect(mockActions.setOrder).toHaveBeenCalledWith("desc");
    });
});
