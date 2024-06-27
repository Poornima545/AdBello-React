import { render, screen } from "@testing-library/react"
import Register from "./Register"
import { act } from "react"
import { MemoryRouter } from "react-router-dom"

describe('Register Component', () => {
    test('renders Register form with all the fileds', () => {
        act(() => {
            render(
                <MemoryRouter>
                    <Register />
                </MemoryRouter>
            )
        })

        const emailInput = screen.getByPlaceholderText(/Email/i);
        expect(emailInput).toBeInTheDocument()
    })
})
