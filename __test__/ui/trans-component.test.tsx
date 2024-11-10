import { cleanup, render } from '@testing-library/react';

import TransComponent from '@/components/TransComponents';

describe('TransComponent test suite', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render translated text when given a valid i18nKey', () => {
    const { getByText } = render(
      <TransComponent i18nKey="transSample">
        Hello, <b>user!</b>
      </TransComponent>,
    );

    expect(getByText(/Hello/i)).toBeInTheDocument();
  });
});
