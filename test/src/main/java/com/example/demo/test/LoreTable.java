package com.example.demo.test;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.SequenceGenerator;

@MappedSuperclass
public abstract class LoreTable {
	@Id
	@Column(name = "id", columnDefinition = "serial")
	@SequenceGenerator(name="lore_seq", sequenceName="lore_id_seq", allocationSize=1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="lore_seq")
	protected int id;	
	protected String name;
}
