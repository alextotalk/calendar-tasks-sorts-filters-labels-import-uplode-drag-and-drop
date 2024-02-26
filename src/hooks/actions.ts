import {useDispatch} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import {dayTasksActions} from '../store/slices/dayTasks.slice'

const actions = {
    ...dayTasksActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}