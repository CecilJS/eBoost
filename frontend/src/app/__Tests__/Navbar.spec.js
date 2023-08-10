"use client";
import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../../components/Navbar";
import "@testing-library/jest-dom";
import { describe, it, expect } from "@jest/globals";

describe("Navbar", () => {
  it("should render the Navbar", () => {
    render(<Navbar />);

    //props for assertions
    const HomeText = screen.getByText("Home");
    const AboutText = screen.getByText("About");
    const LogsText = screen.getByText("Logs");
    const LoginText = screen.getByText("Login");
    const SettingsText = screen.getByText("Settings");

    //  Assertions to validate component
    expect(HomeText).toBeInTheDocument();
    expect(AboutText).toBeInTheDocument();
    expect(LogsText).toBeInTheDocument();
    expect(LoginText).toBeInTheDocument();
    expect(SettingsText).toBeInTheDocument();
  });

  it("should not find Navbar texts in the document if wrong text is passed", () => {
    render(<Navbar />);

    //props for assertions
    const HomeText = screen.queryByText("Homes");
    const AboutText = screen.queryByText("About us");
    const LogsText = screen.queryByText("Logss");
    const LoginText = screen.queryByText("Login button");
    const SettingsText = screen.queryByText("Setting");

    //  Assertions to validate component
    expect(HomeText).not.toBeInTheDocument();
    expect(AboutText).not.toBeInTheDocument();
    expect(LogsText).not.toBeInTheDocument();
    expect(LoginText).not.toBeInTheDocument();
    expect(SettingsText).not.toBeInTheDocument();
  });
});
