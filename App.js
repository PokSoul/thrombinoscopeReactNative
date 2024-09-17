import styled, { ThemeProvider } from 'styled-components';
import Thrombinoscrope from './src/screens/throbinoscrope';
import { SafeAreaView, Platform, StatusBar } from 'react-native';
import theme from './src/styles/theme';

const StyledSafeAreaView = styled(SafeAreaView)`
    flex: 1;
    background-color: ${(props) => props.theme.colors.background};
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <StyledSafeAreaView>
                <Thrombinoscrope />
            </StyledSafeAreaView>
        </ThemeProvider>
    );
}
