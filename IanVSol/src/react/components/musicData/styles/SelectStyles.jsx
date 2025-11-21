export const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "black",
      borderColor: state.isFocused ? 'black' : 'white',
      boxShadow: state.isFocused ? 'black' : 'none',
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isSelected ? 'black' : 'black',
      color: state.isSelected ? 'black' : 'white',
      '&:hover': {
        backgroundColor: '#4B0082',
        borderRadius: "8px",
      },
    }),
    menu: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isSelected ? 'black' : 'black',
      color: state.isSelected ? 'black' : 'white',
      '&:hover': {
        backgroundColor: 'black',
        borderRadius: "8px",
      },
    }),
    menuList: (baseStyles) => ({
        ...baseStyles,
        backgroundColor: "black",
        color: "white",
        maxHeight: "200px",
        overflowY: "auto",
        "::-webkit-scrollbar": {
          width: "8px",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "white", // Scroll thumb color
          borderRadius: "10px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "gray",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "#222", // Scroll track background
        },
      }),
    multiValue: (baseStyles) => ({
        ...baseStyles,
        backgroundColor: "#4B0082", // Dark purple background for tags
        borderRadius: "8px",
      }),
    multiValueLabel: (baseStyles) => ({
        ...baseStyles,
        color: "white", // White text inside the tag
      }),
    multiValueRemove: (baseStyles) => ({
        ...baseStyles,
        color: "white",
        ":hover": {
          backgroundColor: "white", // Changes background on hover
          color: "black",
          borderRadius: "8px",
        }
    }),
    
  };