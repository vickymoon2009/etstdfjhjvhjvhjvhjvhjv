class StudentCard
{
    #name;
    #age;
    #faculty;
    #year;
    #photo;

    constructor(name, age, faculty, year, photo)
    {
        this.#name = name;
        this.#age = age;
        this.#faculty = faculty;
        this.#year = year;
        this.#photo = photo;
    }

    introduce()
    {
        return "Студент " + this.#name + ", " +
            this.#age + " лет, факультет " +
            this.#faculty + ", курс " +
            this.#year + ".";
    }

    updateYear()
    {
        this.#year++;
    }

    graduate()
    {
        if (this.#year > 4)
        {
            return "Студент " + this.#name +
                " закончил обучение.";
        }

        return "Студент " + this.#name +
            " еще учится.";
    }

    get faculty()
    {
        return this.#faculty;
    }

    set faculty(value)
    {
        this.#faculty = value;
    }
}

let student1 = new StudentCard(
    "Victoria",
    18,
    "Computer Science",
    2,
    "студентка молоденькая.jpg"
);

let student2 = new StudentCard(
    "Anna",
    19,
    "Design",
    3,
    "студентка молоденькая.jpg"
)

console.log(student1.introduce());
console.log(student2.introduce());

console.log("Faculty:", student1.faculty);

student1.faculty = "Programming";

console.log("New faculty:", student1.faculty);
student1.updateYear();
console.log(student1.graduate());
console.log(student2.graduate());
document.getElementById("name").innerText = "Victoria";
document.getElementById("age").innerText = "18";
document.getElementById("faculty").innerText = student1.faculty;
document.getElementById("year").innerText = "3";

document.getElementById("result").innerText =
    student1.graduate();