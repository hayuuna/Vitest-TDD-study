import { render, screen } from '@testing-library/react';
import App from './App';

test('App contains correct heading', () => {
  render(<App />);
  // const headingElement = screen.getByText("I'm gonna learn React Testing Library");
  // 문자열도 가능하지만 문자열을 사용하려면 정확하게 일치하게 해야 한다.

  // const headingElement = screen.getByText(/learn react/i);
  const headingElement = screen.getByRole('heading', { name: /learn react/i });
  // / /은 정규표현식으로 문자가 들어가기만 하면 유연하게 테스트가 통과한다.
  // i는 대소문자 구분이 없는것을 의미한다.

  expect(headingElement).toBeInTheDocument();
  // 모두 expect 메서드로 시작하고 Vitest(jest)에서 전역 메서드이다.
  // ()안에는 인자가 들어간다. 기대를 충족하는지 확인한다.
  // .뒤에는 단언 유형을 나타낸다. toBeInTheDocument는 Jest-DOM에서 가져온다. ()안에 인자가 있을 수도 있다. 테스트 통과 여부를 결정하는 곳

  // 예시
  // expect(element.textContent).toBe('hello');
  // expect(elementsArray).toHaveLength(7);
});

// 빈 테스트
test('empty test', () => {});

// 실패
test.skip('throws error explicitly', () => {
  throw new Error('fail this test!');
});
