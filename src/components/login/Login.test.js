import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Login from "./Login";
import { act } from 'react'
import { MemoryRouter } from "react-router-dom";

describe('Login Component', () => {
    test('renders login form with all the fields', () => {
        act(() => {
            render(
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            )
        })

        const emailInput = screen.getByPlaceholderText(/Email/i);
        expect(emailInput).toBeInTheDocument();

        const passwordInput = screen.getByPlaceholderText(/Password/i);
        expect(passwordInput).toBeInTheDocument();

        const forgotPassword = screen.getByText(/Forgot Password\?/i);
        expect(forgotPassword).toBeInTheDocument();

        const loginButton = screen.getByText(/Login/i);
        expect(loginButton).toBeInTheDocument();

        const registerLink = screen.getByText(/Not a member yet\? Register/i);
        expect(registerLink).toBeInTheDocument();
    });
});
