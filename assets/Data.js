export const BaseUrl = 'https://agri-api-one.vercel.app';

export const getFarm = async(id)=>{
    try{
        const response = await fetch(`${BaseUrl}/farm/${id}`);
        const json = await response.json();
        return json.farm;
    }catch(e){
        console.log('error getting farm...', e);
    }
}