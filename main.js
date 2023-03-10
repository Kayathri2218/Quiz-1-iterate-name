// 1)Filter the students from the class 6th 'A' section from the below array of objects.


myArr = [
    {
        studenName: "jack",
        studenClass: 6,
        studenSection: "a"
    },
    {
        studenName: "tom",
        studenClass: 6,
        studenSection: "a"
    },
    {
        studenName: "ricky",
        studenClass: 6,
        studenSection: "b"
    }, 
    {
        studenName: "john",
        studenClass: 6,
        studenSection: "b"
    }, 
    {
        studenName: "jerry",
        studenClass: 6,
        studenSection: "a"
    }, 
    {
        studenName: "henry",
        studenClass: 6,
        studenSection: "b"
    }, 
    {
        studenName: "stephen",
        studenClass: 6,
        studenSection: "a"
    }
]

let studentNames = myArr
  .filter(student => student.studenClass === 6 && student.studenSection === 'a')
  .map(student => student.studenName);

console.log(studentNames);
