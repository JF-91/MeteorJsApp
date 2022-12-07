
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React, { FC } from 'react'

interface PropType{
    children:JSX.Element
}

enum paletteTheme{
    BG ="#F3EFE0",
    PY = "#434242",
    SC = "#22A39F",
    SUCSS = "#344D67",
    ERR = "#F06292"
}

export const ThemeConfig:FC<PropType> = ({children}) => {

    const theme = createTheme({
        palette:{
            mode:"light",
            background:{
                default:paletteTheme.BG
            },
            primary:{
                main:paletteTheme.PY
            },
            secondary:{
                main:paletteTheme.SC
            },
            success:{
                main:paletteTheme.SUCSS
            },
            error:{
                main:paletteTheme.ERR
            }
        }
    })

  return (
    <ThemeProvider theme={theme}>
        {children}
        <CssBaseline />
    </ThemeProvider>
  )
}
