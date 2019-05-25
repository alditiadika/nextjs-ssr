export const testeducer = (state = { test: 'test' }, action) => {
    switch (action.type) {
        default: {
            return {
                ...state
            }
        }
    }
}
