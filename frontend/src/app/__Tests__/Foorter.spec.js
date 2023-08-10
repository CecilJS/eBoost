"use client";
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";
import "@testing-library/jest-dom";
import { describe, it, expect } from "@jest/globals";

describe("Footer", () => {
  it("should render the Footer", () => {
    const children = "© eBoost - 2023";
    render(<Footer>{children}</Footer>);

    const FooterText = screen.getByText(children);
    expect(FooterText).toBeInTheDocument();
  });

  it("should not find Footer text in the document if wrong text is passed", () => {
    const children = "© eBoost - 2022";
    render(<Footer>{children}</Footer>);

    const FooterText = screen.queryByText(children);
    expect(FooterText).not.toBeInTheDocument();
  });
});
