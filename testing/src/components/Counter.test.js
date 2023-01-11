import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter Tests", () => {
  let increaseBtn, decreaseBtn, count;

  beforeEach(() => {
    render(<Counter />);
    count = screen.getByText("0");
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease");
  });

  beforeAll(() => {
    console.log("İlk başta bir kere çalışacağım!");
  });

  afterEach(() => {
    console.log("Her testten sonr çalışacağım");
  });

  afterAll(() => {
    console.log("En son bir kere çalışacağım");
  });
  test("increase btn", () => {
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("-1");
  });

  test("decrease btn", () => {
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("1");
  });
});

// test("increase btn", () => {
//   render(<Counter />);

//   const count = screen.getByText("0");
//   const increaseBtn = screen.getByText("Increase");

//   userEvent.click(increaseBtn);
//   expect(count).toHaveTextContent("1");
// });

// test("decrease btn", () => {
//   render(<Counter />);

//   const count = screen.getByText("0");
//   const decreaseBtn = screen.getByText("Decrease");

//   userEvent.click(decreaseBtn);
//   expect(count).toHaveTextContent("-1");
// });
