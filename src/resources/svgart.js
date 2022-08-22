
export const arrow = (style) => {

    return (
        <svg
            style={style}
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 330 330"
            xmlSpace="preserve"
        >
            <path d="M250.606 154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213.001-5.857 5.858-5.857 15.355.001 21.213l139.393 139.39L79.393 304.394c-5.857 5.858-5.857 15.355.001 21.213C82.322 328.536 86.161 330 90 330s7.678-1.464 10.607-4.394l149.999-150.004a14.996 14.996 0 000-21.213z"></path>
        </svg>
    )
}

export const exitButton = (style) => {
    return (
        <svg
        style={style}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="feather feather-x"
        viewBox="0 0 24 24"
      >
        <path d="M18 6L6 18"></path>
        <path d="M6 6L18 18"></path>
      </svg>
    );
}
