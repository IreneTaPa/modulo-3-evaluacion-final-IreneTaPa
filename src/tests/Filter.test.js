import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filters from '../components/Filters';

describe('check test', () => {
  test('check test', () => {
    const word = 'nombre';
    // Arrange
    render(<Filters />);
    // Act
    const title = screen.getByText(word, { exact: false });
    // Assert
    expect(title).toBeInTheDocument();
  });
});
