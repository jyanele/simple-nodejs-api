export default function createCourse({ Id }) {
    return function makeCourse({
        id = Id.makeId(),
        name,
        totalCredits,
        yearCommenced
    }) {
    
        if(Id.isValid(id)) throw new Error('Please provide a valid id.')
        if(!name) throw new Error("Please provide a valid name.")
        if(!totalCredits) throw new Error("Please provide a valid total credit point.")
        if(!yearCommenced) throw new Error("Please provide year of commencement.")
    
        return Object.freeze({
            getName: () => name,
            getTotalCredits: () => totalCredits,
            getYearCommenced: () => yearCommenced
        })
    }
}