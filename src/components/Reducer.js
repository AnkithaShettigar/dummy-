import NewStudent from "./NewStudent";
import Edit from "./Edit";
import Student from "./Student";

const Reducer = (state="",action) =>{
    switch(action){
        case NewStudent : return<NewStudent/>
        case Edit:return <Edit/>
        default:return<Student/>
    }
}

export default Reducer;