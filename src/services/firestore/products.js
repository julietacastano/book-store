import { getDocs, query, where, collection, getDoc, doc} from "firebase/firestore";
import { db } from '../../services/firebase'
import { prodAdaptFromFirestore } from "../../adapter/prodAdapter";

export const getproducts = (categoryId) =>{
    return new Promise((resolve, reject)=> {

        const collectionRef = categoryId 
        ?  query(collection(db,'products'), where('category', '==', categoryId))
        : collection(db,'products')

        getDocs(collectionRef).then(resp => {
            const productAdapt = resp.docs.map(doc => {
                return prodAdaptFromFirestore(doc)
            });
            resolve(productAdapt)

        }).catch((error)=>{reject(error)})
    })
}

export const getProduct = (productId) =>{
    return new Promise((resolve, reject)=>{
        const docRef = doc(db,'products', productId)

        getDoc(docRef).then((resp) => {
            const productAdapt = prodAdaptFromFirestore(resp)
            resolve(productAdapt);
        }).catch((error)=>{reject(error)})
    })
}