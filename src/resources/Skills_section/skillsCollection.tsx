export interface ITechnology{
    title: string,
    expirenceTime: string,
    conceptsKnows?: string[]
}

export interface ISkill{
    skillLabel : string,
    technologies: ITechnology[],
    maxHeight?: number,
}

const skillsCollection: ISkill[] = [
    //Fronted
    {
        skillLabel: 'Frontend',
        technologies: [
            //HTML
            {
                title: 'HTML',
                expirenceTime: '1.5 year expirience',
                conceptsKnows: [ 'Writing clear and semantic code' ]
            },
            //CSS
            {
                title: 'CSS',
                expirenceTime: '1.5 year expirience',
                conceptsKnows: [ 'Responsive Web Design', 'Tools and Frameworks Familiarity', 'Problem-Solving Skills' ]
            },
            //Javascript
            {
                title: 'Javascript',
                expirenceTime: '3 month expirience',
                conceptsKnows: [ 'Javascript Basics', 'Functions' , 'Objects and Methods', 'JavaScript Frameworks' ]
            },
            //Typescipt
            {
                title: 'Typescipt',
                expirenceTime: '1 month expirience',
                conceptsKnows: [ 'TypeScript Fundamentals', 'Type Annotations' , 'Interfaces and Type Declarations', 'Im focus on learn' ]
            },
            //React
            {
                title: 'React',
                expirenceTime: '1 month expirience',
                conceptsKnows: [ 'React Fundamentals', 'Component Development' , 'Component Lifecycle', 'Props', 'Routing']
            },


        ]
    },
    //Backend
    {
        skillLabel: 'Backend',
        technologies: [
            //C#
            {
                title: 'C#',
                expirenceTime: '1 year expirience',
                conceptsKnows: [ 'Fundamentals', 'Object-Oriented Programming', 'Exception Handling', 'LINQ', 'Unit Testing', 'Design Patterns' ]
            },
        ]
    },
    //Database
    {
        skillLabel: 'Database',
        technologies: [
            //T-SQL & MSSQL Server
            {
                title: 'T-SQL & MSSQL Server',
                expirenceTime: '1 year expirience',
                conceptsKnows: [ 'Relational Database Management System', 'DML', 'DDL', 'Normalization', 'SQL Server Management Studio' ]
            },
        ]
    }
   
]

export default skillsCollection