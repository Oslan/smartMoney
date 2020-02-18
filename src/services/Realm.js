import Realm from 'realm';
import CategorySchema from '../schema/CategoySchema';
import EntrySchema from '../schema/EntrySchema';

export const getRealm  = async ()=>{
    const realm  = await Realm.open({
        schema:[CategorySchema, EntrySchema],
        schemaVersion: 1
    });
    return realm;
}