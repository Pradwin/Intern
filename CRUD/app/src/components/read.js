import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function Read() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://6503f867c8869921ae245316.mockapi.io/FakeData`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    var { id, firstName, lastName, Address } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Address",Address);
  };

  const onDelete = (id) => {
    axios.delete(`https://6503f867c8869921ae245316.mockapi.io/FakeData/${id}`)
    .then(() => {
        getData();
    })
  }
  const getData = () => {
    axios.get(`https://6503f867c8869921ae245316.mockapi.io/FakeData`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}
  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>LastName</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>{data.Address}</Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
