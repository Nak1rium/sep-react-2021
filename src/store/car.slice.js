import {createSlice} from "@reduxjs/toolkit";


const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: []
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        },
        deleteCar: (state, action) => {
            return {...state, cars: state.cars.filter(car => car.id !== action.payload.id)}
        },
        updateCar: (state, action) => {
            // const index = state.cars.findIndex(car => car.id === action.payload.id);
            // const newArray = [...state.cars];
            // newArray[index] = {...action.payload.data,id:action.payload.id};
            state.cars = state.cars.map(car => car.id === action.payload.id ? {
                ...action.payload.data,
                id: action.payload.id
            } : car)
            // return {
            //     ...state,
            //     cars: [...newArray]
            //}
        }
    }
})


const carReducer = carSlice.reducer;

export const {addCar, deleteCar, updateCar} = carSlice.actions;
export default carReducer