"use client"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function RatingComponent({number=0}) {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >

      {/* 
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
      */}
      <Typography component="legend">Calificación</Typography>
      <Rating name="read-only" value={number} readOnly />

    </Box>
  );
}
