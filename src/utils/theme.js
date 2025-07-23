import { createTheme } from "@mui/material/styles";
import { COLORS } from "constants/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
        contained: {
          color: "white",
        },
      },
    },
    MuiPaper: {
      defaultProps: {},
      styleOverrides: {
        root: {},
        rounded: {
          borderRadius: `10px`,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {},
        title: {},
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {},
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {},
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            "&:hover": {},
            "& .MuiListItemIcon-root": {},
          },
          "&:hover": {
            "& .MuiListItemIcon-root": {},
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {},
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {},
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {},
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: `10px`,
          "& .MuiOutlinedInput-notchedOutline": {},
          "&:hover $notchedOutline": {},
          "&.MuiInputBase-multiline": {},
        },
        input: {
          borderRadius: "10px",
          "&.MuiInputBase-inputSizeSmall": {
            "&.MuiInputBase-inputAdornedStart": {},
          },
        },
        inputAdornedStart: {},
        notchedOutline: {
          borderRadius: "10px",
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {},
        },
        mark: {},
        valueLabel: {},
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {},
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {},
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-deletable .MuiChip-deleteIcon": {},
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {},
      },
    },
  },
});
