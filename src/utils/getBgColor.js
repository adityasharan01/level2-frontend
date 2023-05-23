export const getBgColor = (theme) => {
    switch (theme) {
        case 'red':
            return 'bg-red-500';
        case 'blue':
            return 'bg-blue-500';
        case 'green':
            return 'bg-green-500';
        case 'yellow':
            return 'bg-yellow-500';
        default:
            return 'bg-blue-500';
    }
};