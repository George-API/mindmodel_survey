import { createTheme } from '@mui/material/styles';
// Define consistent spacing and sizing
const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
};
// Define consistent colors
const colors = {
    primary: '#2563eb',
    light: '#60a5fa',
    dark: '#1d4ed8',
    secondary: {
        main: '#64748b',
        light: '#94a3b8',
        dark: '#475569',
    },
    text: {
        primary: '#1e293b',
        secondary: '#64748b',
    },
    background: {
        default: '#ffffff',
        paper: '#ffffff',
    },
    border: 'rgba(0, 0, 0, 0.12)',
};
// Define consistent shadows
const shadows = {
    soft: '0 2px 4px rgba(0, 0, 0, 0.05)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
};
// Define consistent transitions
const transitions = {
    hover: 'all 0.2s ease-in-out',
};
// Define font family stack
const fontFamily = [
    'Helvetica Neue',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Arial',
    'sans-serif'
].join(',');
const themeOptions = {
    palette: {
        primary: {
            main: colors.primary,
            contrastText: '#ffffff',
        },
        secondary: colors.secondary,
        background: colors.background,
        text: {
            primary: colors.text.primary,
            secondary: colors.text.secondary,
        },
    },
    typography: {
        fontFamily,
        h1: {
            fontWeight: 600,
        },
        h2: {
            fontWeight: 600,
        },
        h3: {
            fontWeight: 600,
        },
        h4: {
            fontWeight: 500,
        },
        h5: {
            fontWeight: 500,
        },
        h6: {
            fontWeight: 500,
        },
        body1: {
            lineHeight: 1.5,
            letterSpacing: '0.01em',
        },
        body2: {
            lineHeight: 1.5,
            letterSpacing: '0.01em',
        },
        button: {
            fontWeight: 500,
            letterSpacing: '0.02em',
            textTransform: 'none',
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    border: `1px solid ${colors.border}`,
                    boxShadow: 'none',
                    transition: transitions.hover,
                    '&:hover': {
                        boxShadow: shadows.soft,
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    border: `1px solid ${colors.border}`,
                    '&[data-selected="true"]': {
                        borderColor: colors.primary,
                        backgroundColor: `${colors.primary}08`,
                    },
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                fullWidth: true,
            },
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        transition: transitions.hover,
                        '&:hover': {
                            borderColor: colors.primary,
                        },
                        '& fieldset': {
                            borderColor: '#e2e8f0',
                        },
                        '&:hover fieldset': {
                            borderColor: '#94a3b8',
                        },
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 500,
                    padding: `${spacing.sm}px ${spacing.md}px`,
                    transition: transitions.hover,
                },
            },
        },
    },
};
export const surveyTheme = createTheme(themeOptions);
// Export reusable styles for custom components
export const componentStyles = {
    questionContainer: {
        marginBottom: spacing.lg,
    },
    cardHover: {
        transition: transitions.hover,
        '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: shadows.medium,
        },
    },
    gridLayout: {
        display: 'grid',
        gap: spacing.md,
    },
};
