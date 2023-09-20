interface experienceObject {
    id: number,
    title: string,
    organizationName: string,
    location: string,
    description: string,
    date: string,
    linkText? : string,
    organizationWebsite? : string
}

let educatopnTimelie : experienceObject[] = [
  {
    id: 1,
    title : 'High School',
    organizationName : 'ZSTI Mszana Dolna',
    location : 'Mszana Dolna, Poland',
    description : 'Informatics Profile - Learning the basics and more advanced informatics concepts, including programming languages such as C, HTML, CSS, JavaScript, PHP, and SQL, as well as networking (hardware, protocols, and network topology).',
    date : 'September 2016 - May 2020',
    linkText: 'Visite ZSTI',
    organizationWebsite: 'https://zsti.edu.pl/'
  }, 
  {
    id: 2,
    title : 'Studies',
    organizationName : 'WSEI Kraków',
    location : 'Kraków, Poland',
    description : 'Applied Computer Science profile with a specialization in developing web applications.',
    date : 'September 2022 - Present',
    linkText: 'Visite WSEI',
    organizationWebsite: 'https://wsei.edu.pl'
  }
]

export default educatopnTimelie;