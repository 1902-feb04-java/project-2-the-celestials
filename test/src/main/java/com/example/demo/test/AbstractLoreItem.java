package com.example.demo.test;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractLoreItem extends LoreTable {
	protected String description;
}
