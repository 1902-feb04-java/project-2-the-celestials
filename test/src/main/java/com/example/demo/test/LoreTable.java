package com.example.demo.test;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.SequenceGenerator;

@MappedSuperclass
public abstract class LoreTable {
	@Id
	@SequenceGenerator(name="lore_seq", sequenceName="lore_id_seq", allocationSize=1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="lore_seq")
	protected int id;	
	protected String name;
}
