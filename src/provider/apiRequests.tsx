import React, { ReactElement, useState } from 'react';
import * as Network from 'expo-network';
import { Platform } from 'react-native';

// API requests are building with the my ipV4 because I am working with expo and external pyshical device.

const baseUrl = Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';

// Please, if you run this application in another external physical device put the IPv4 in the nex row and discomment it. 

// const baseUrl = 'http://YOUR_IP'

const createAlbum = async () => {
    
    const urlAlbum =`${baseUrl}:3000/album`
    try {
      const response = await fetch(
        urlAlbum,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: "Los Carmenes",
        artistId: "6238bdebc38eb300132e0043",
        coverUrl: "www.url.com",
        year: 1936,
        genre: "pop" })
        
    })
    const json = await response.json();
    console.log(json)
    } catch (error) {
        console.error(error);
      }
  }
  const deleteAlbum = async (id: string) => {
    const urlArtist = `http://192.168.1.48:3000/album/${id}`
    try {
      const response = await fetch(
        urlArtist,{
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json();
    return json
    } catch (error) {
        console.error(error);
      }
  }
  const getAlbum = async (id: string) => {
    const urlArtist = `http://192.168.1.48:3000/album/${id}`
    try {
      const response = await fetch(
        urlArtist,{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json();
    return json
    } catch (error) {
        console.error(error);
      }
  }
const listAllAlbums = async () => {

    const urlAlbum =`http://192.168.1.35:3000/albums/all`
    console.log(urlAlbum)
    try {
      const response = await fetch(
        urlAlbum,{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    const json = await response.json();
    console.log(json)
    } catch (error) {
        console.error(error);
      }
  }
  const createArtist = async () => {
    const urlArtist = "http://192.168.1.48:3000/artist"
    try {
      const response = await fetch(
        urlArtist,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: "Freddie Mercury",
        photoUrl: "string",
        birthdate: "1946-09-05",
        deathDate: "1991-11-24" })
    })
    const json = await response.json();
    return json
    } catch (error) {
        console.error(error);
      }
  }

  const deleteArtist = async (id: string) => {
    const urlArtist = `http://192.168.1.48:3000/artist/${id}`
    try {
      const response = await fetch(
        urlArtist,{
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json();
    return json
    } catch (error) {
        console.error(error);
      }
  }
  const getArtist = async (id: string) => {
    const urlArtist = `http://192.168.1.48:3000/artist/${id}`
    try {
      const response = await fetch(
        urlArtist,{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json();
    return json
    } catch (error) {
        console.error(error);
      }
  }

  const listAllArtists = async () => {
    const urlAlbum =`http://192.168.1.48:3000/artists/all`
    try {
      const response = await fetch(
        urlAlbum,{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    const json = await response.json();
    return json
    } catch (error) {
        console.error(error);
      }
  }

export {createAlbum, createArtist ,listAllAlbums, listAllArtists,deleteArtist}