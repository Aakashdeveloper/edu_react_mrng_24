import React from 'react';
import {render,fireEvent, waitFor, screen} from '@testing-library/react';
import Search from '../Home/Search';

global.fetch = jest.fn(() => {
    Promise.resolve({
        json : () => Promise.resolve([])
    })
})

describe('Search Component' ,() => {
    it('render Search' , async() => {
        render(<Search />);

        fetch.mockImplementationOnce(() => 
            Promise.resolve({
                json:() => 
                    Promise.resolve([
                        {state_id:'1', state:'State 1'},
                        {state_id:'2', state:'State 2'}
                    ]),
            })
        );

        // data is loaded in screen
        await waitFor(() =>  screen.getByText('State 1'))

        fireEvent.change(screen.getByTestId('city-dropdown'),{
            target:{value:'1'}
        })

        
    })
})