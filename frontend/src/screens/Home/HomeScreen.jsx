// src/screens/Home/HomeScreen.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  TextField,
  IconButton,
  Stack,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "../../components/Navbar";

export default function HomeScreen() {
  const username = "Khalil";

  // Static list of todos
  const [todos, setTodos] = useState([
    { id: 1, title: "Buy groceries" },
    { id: 2, title: "Finish project" },
    { id: 3, title: "Workout" },
  ]);

  // Modal states
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

  // Current selected todo
  const [currentTodo, setCurrentTodo] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  // Handlers
  const handleDeleteClick = (todo) => {
    setCurrentTodo(todo);
    setOpenDelete(true);
  };

  const handleEditClick = (todo) => {
    setCurrentTodo(todo);
    setNewTitle(todo.title);
    setOpenEdit(true);
  };

  const handleAddClick = () => {
    setNewTitle("");
    setOpenAdd(true);
  };

  return (
    <Box>
      <Navbar username={username} />

      <Box sx={{ p: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h4">Your To-Do List</Typography>
          <IconButton
            color="primary"
            onClick={handleAddClick}
            sx={{ bgcolor: "#FFC300", "&:hover": { bgcolor: "#FFD633" } }}
          >
            <AddIcon />
          </IconButton>
        </Box>

        <Stack spacing={2}>
          {todos.map((todo) => (
            <Paper
              key={todo.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,
              }}
            >
              <Typography>{todo.title}</Typography>
              <Box>
                <Button
                  variant="outlined"
                  sx={{ mr: 1 }}
                  onClick={() => handleEditClick(todo)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteClick(todo)}
                >
                  Delete
                </Button>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Box>

      {/* Delete Modal */}
      <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography mb={2}>
            Are you sure you want to delete "{currentTodo?.title}"?
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              setTodos(todos.filter((t) => t.id !== currentTodo.id));
              setOpenDelete(false);
            }}
            sx={{ mr: 1 }}
          >
            Yes
          </Button>
          <Button onClick={() => setOpenDelete(false)}>Cancel</Button>
        </Box>
      </Modal>

      {/* Edit Modal */}
      <Modal open={openEdit} onClose={() => setOpenEdit(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: 300,
          }}
        >
          <Typography>Edit To-Do</Typography>
          <TextField
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            fullWidth
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button
              variant="contained"
              onClick={() => {
                setTodos(
                  todos.map((t) =>
                    t.id === currentTodo.id ? { ...t, title: newTitle } : t
                  )
                );
                setOpenEdit(false);
              }}
            >
              Save
            </Button>
            <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
          </Box>
        </Box>
      </Modal>

      {/* Add Modal */}
      <Modal open={openAdd} onClose={() => setOpenAdd(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: 300,
          }}
        >
          <Typography>Add New To-Do</Typography>
          <TextField
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            fullWidth
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button
              variant="contained"
              onClick={() => {
                setTodos([...todos, { id: Date.now(), title: newTitle }]);
                setOpenAdd(false);
              }}
            >
              Add
            </Button>
            <Button onClick={() => setOpenAdd(false)}>Cancel</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
