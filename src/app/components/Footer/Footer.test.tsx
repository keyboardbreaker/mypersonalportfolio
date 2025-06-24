import renderer from 'react-test-renderer';
import Footer from './footer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Footer 
        linkedIn="dddd"
        twitter='dddd'
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});