import { useState } from "react";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Box,
  Text,
} from "@chakra-ui/react";
import * as usersService from "../../utilities/users-service";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the login service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <Box p={4} mb={0} borderWidth="1px" borderRadius="md">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </FormControl>
        <Button type="submit" mt={4} colorScheme="blue" w="100%">
          Log In
        </Button>
      </form>
      {error && (
        <Text color="red" mt={2}>
          {error}
        </Text>
      )}
    </Box>
  );
}
