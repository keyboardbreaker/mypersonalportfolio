import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Textbox from '.';

describe('<Textbox />', () => {

    test('loads and displays label', async () => {
        render(<Textbox label="Test Textbox" handleChange={() => console.log("Hello")}/>)
      
        const linkElement = screen.getByText(/Test Textbox/i);
        expect(linkElement).toBeInTheDocument();
      })
})