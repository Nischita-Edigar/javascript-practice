let employees = [{ id: 101, name: 'jhon', salary: 45000 }, { id: 102, name: 'Sara', salary: 55000 }];
let createEmployee = (emp) => {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true
            employees.push(emp);
            flag ? resolve("Data Inserted Successfully") : reject("Insertion failed...!!")
        }, 4000);
    });
}
let getEmployees = () => {
    
    setTimeout(() => {
        let rows = "";
        employees.forEach((employee) => {
            rows = rows + `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.salary}</td>
                        </tr>`
        })
        document.getElementById('table_data').innerHTML = rows

    }, 1000)
}

let ready = async () => {
    
    await createEmployee({ id: 103, name: 'Peter' })
    getEmployees()
}
ready()