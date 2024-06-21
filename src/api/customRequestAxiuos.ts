import {errorSnackbar} from "../components/Snackbar/Snackbar";

export const customRequestAxiuos = async (fun:()=>Promise<any>, onSuccess:(data:any)=>Promise<void>) => {
    try {
        const res = await fun()
        await onSuccess(res.data)
    }catch (e) {
        errorSnackbar("Server error")
    }
}