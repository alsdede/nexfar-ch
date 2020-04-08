export const categoryColors = str => {
    switch (str) {
        case 'Eletronicos':
            return 'blue';
            break;
        case 'Ferramentas':
            return 'gold';
            break;
        case 'Casa':
            return '#892383';
            break;
        case 'Saúde':
            return '#238947';
            break;
        case 'Informatica':
            return 'red';
            break;
        default:
            return '#333';
    }
};
