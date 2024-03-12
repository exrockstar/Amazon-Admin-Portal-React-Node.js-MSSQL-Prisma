var express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const get = async (req, res) => {
    const { filterOption } = req.query;
    const { page, pageSize, sortBy, sortOrder } = filterOption;
    // console.log(filterOption)
    const skip = (page - 1) * pageSize;
    const take = parseInt(pageSize, 10);

  const data = await prisma.core_Subscription.findMany({
    // where: {
    //   OR: [
    //     {
    //       name: {
    //         contains: search,
    //         mode: 'insensitive', // Case-insensitive
    //       },
    //     },
    //     {
    //       email: {
    //         contains: search,
    //         mode: 'insensitive', // Case-insensitive
    //       },
    //     },
    //   ],
    // },
    orderBy: {
      [sortBy]: sortOrder,
    },
    skip,
    take,
  });

  const total = await prisma.core_Subscription.count({});

  res.send({data, total});
}

module.exports = {
    get
};