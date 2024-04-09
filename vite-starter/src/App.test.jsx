import { logRoles } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import App from './App';

// test메서드는 2개의 인자를 받는다. 첫번째는 테스트 이름을 작성하고 두번째는 실행할 함수이다. 함수에서 예외가 발생하면 실패한다.

// 클릭 전의 전제 조건 테스트

// 버튼이 올바른 색상으로 시작되는지 테스트(red)
test('button starts with correct color', () => {
  const { container } = render(<App />);
  logRoles(container);
  // logRoles: 페이지가 크고 잘 알지 못하는 역할이 있을 때 사용한다.

  const buttonElement = screen.getByRole('button', { name: /blue/i }); // 단언, 액세스 할 수 있는 이름 내에 blue가 있는 버튼이 없으면 name은 해당 버튼의 경우 버튼에 표시되는 문자열
  expect(buttonElement).toHaveClass('red');
});
// 초기 텍스트 찾는 테스트(blue) => { name: /blue/i }로 대체가 가능하다.
test('button starts with correct text', () => {});

// 클릭 후의 조건 테스트
test('button has with correct color after click', () => {});

test('button has correct text after click', () => {});
