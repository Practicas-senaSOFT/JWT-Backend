export const getSqlEntities = ():String => {
    //Obtenemos las entidades
    const entities : {js:String,ts:string} = {
        ts:'src/models/sql/**/*',
        js:'build/src/models/**/*.js'
    };
    const entitiesPath:String|null = entities.ts ? entities.js : null;
    console.log(`Entities: ${entitiesPath}`);
    //Validamos si obtenemos
    if(!entitiesPath) console.log('WARN: No entities path had been loaded.');
    
    return entitiesPath ?? '';
};