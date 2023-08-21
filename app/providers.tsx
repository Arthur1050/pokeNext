'use client'
import StyledComponentsRegistry from '@/public/registry'
import { Provider } from 'react-redux'
import store from '@/redux/store'

export default function Providers({
    children
}: {
    children: React.ReactNode
}) {
    return(
        <Provider store={store}>
            <StyledComponentsRegistry>
                {children}
            </StyledComponentsRegistry>
        </Provider>
    )
}