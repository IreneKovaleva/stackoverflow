import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, getByTestId} from '@testing-library/react';
import App from "../../App";
import { useActions } from '../../store/hooks/useActions';
import * as useActionsModule from '../../store/hooks/useActions';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from "../../store";


jest.mock('../../store/hooks/useActions');

describe('App component', () => {
  let mockActions: any;

  beforeEach(() => {
    mockActions = {
      setSearchItemsRender: jest.fn(),
      setSearchIsModal: jest.fn(),
      fetchQuestionsApiEndpoint: jest.fn()
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
            <App />
          </BrowserRouter>
        </Provider>
    );
  });

  it('test of displaying of the window with Advanced search parameters  ', () => {
    const { getByTestId } = render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
    );
    const showAdvancedSearchWindow = getByTestId('advanced_search-button');
    const modalWindow = getByTestId('modal-window');
    fireEvent.click(showAdvancedSearchWindow);
    expect(mockActions.setSearchItemsRender).toHaveBeenCalledWith(false);
    expect(mockActions.setSearchIsModal).toHaveBeenCalledWith(true);

    const modalWindowStyles = window.getComputedStyle(modalWindow);
    expect(modalWindowStyles.getPropertyValue('display')).toBe('block');
  });
});
