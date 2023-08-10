"use client";
import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../../components/Button";
import "@testing-library/jest-dom";
import { describe, it, expect } from "@jest/globals";

describe("Button", () => {
  it("should render the Button", () => {
    const children = "Some Text";
    render(<Button>{children}</Button>);

    const ButtonText = screen.getByText("Some Text");
    expect(ButtonText).toBeInTheDocument();
  });

  it("should not find Button text in the document if wrong text is passed", () => {
    const children = "Some Text";
    render(<Button>{children}</Button>);

    const ButtonText = screen.queryByText("Some Texts");
    expect(ButtonText).not.toBeInTheDocument();
  });
});
