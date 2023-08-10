"use client";
import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../../components/Card";
import "@testing-library/jest-dom";
import { describe, it, expect } from "@jest/globals"; // Reordered 'expect'

const mockLogModal = jest.fn();
jest.mock("../../components/Modal", () => (props) => {
  mockLogModal(props);
  return <mock-LogModal />;
});

describe("Card", () => {
  it("should render the Card", () => {
    const title = "Engine Health";
    const content = "This is the content for engine health";

    const children = "Some Text";
    render(<Card title={title} content={content} />);

    const titleText = screen.getByText("Engine Health");
    const contentText = screen.getByText(
      "This is the content for engine health"
    );

    //Assertions for validate component
    expect(titleText).toBeInTheDocument();
    expect(contentText).toBeInTheDocument();
  });

  it("should not find Card title text and Card content text in the document if wrong text is passed", () => {
    const title = "Engine Health";
    const content = "This is the content for engine health";

    const children = "Some Text";
    render(<Card title={title} content={content} />);

    const titleText = screen.queryByText("Engine Healths");
    const contentText = screen.queryByText(
      "This is the content for engine healths"
    );

    //Assertions for validate component
    expect(titleText).not.toBeInTheDocument();
    expect(contentText).not.toBeInTheDocument();
  });
});
