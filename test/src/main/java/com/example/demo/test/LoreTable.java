package com.example.demo.test;

import java.lang.annotation.Inherited;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class LoreTable {
	protected String name;
}
