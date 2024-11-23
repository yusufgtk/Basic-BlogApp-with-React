
export const getCategories = () => {
    return async (dispatch) => {
        try {
            let data = [];
            var response = await fetch("http://localhost:3000/categories");
            data = await response.json();
            dispatch({
                type:"GET_CATEGORİES",
                payload:{
                    categories:data
                }
            });

        } catch (error) {
            console.log(error);
        }
    }
}

export const getCategory = (categoryId) => {
    return async (dispatch) => {
        try {
            var response = await fetch(`http://localhost:3000/categories?id=${categoryId}`);
            var data = await response.json();
            console.log(data);
            dispatch({
                type:"GET_CATEGORY",
                payload:{
                    categories:data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}