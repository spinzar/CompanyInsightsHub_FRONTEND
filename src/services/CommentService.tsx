// src/services/CommentService.tsx

import axios from "axios";
import { CommentGet, CommentPost } from "../models/Comment";
import { handleError } from "../helpers/ErrorHandler";

const api = "http://localhost:5212/api/comments/";

export const commentPostAPI = async (title: string, content: string, symbol: string) => {
    try{
        const data = await axios.post<CommentPost>(api + `${symbol}`, {
            title: title,
            content: content
        });
        return data;
    } catch (error) {
        handleError(error);
    }
}

export const commentGetAPI = async (symbol: string) => {
    try{
        const data = await axios.get<CommentGet[]>(api + `?Symbol=${symbol}`);
        return data;
    } catch (error) {
        handleError(error);
    }
}