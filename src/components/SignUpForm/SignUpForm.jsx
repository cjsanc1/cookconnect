import { useState } from "react";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Box,
  Text,
} from "@chakra-ui/react";
import { signUp } from "../../utilities/users-service";

export default function SignUpForm({ setUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await signUp(formData);
      setUser(user);
    } catch {
      setError("Sign Up Failed - Try Again");
    }
  }

  const isDisabled = formData.password !== formData.confirm;

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" mb={3}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Confirm</FormLabel>
          <Input
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
            required
          />
        </FormControl>
        <Button
          type="submit"
          mt={4}
          colorScheme="blue"
          disabled={isDisabled}
          w="100%"
        >
          SIGN UP
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
